// Media handling functions
let mediaUploadQueue = [];
const MAX_IMAGE_SIZE = 2048 * 1024; // 2MB
const MAX_VIDEO_SIZE = 8192 * 1024; // 8MB

async function handleMediaUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size
    if ((type === 'image' && file.size > MAX_IMAGE_SIZE) || 
        (type === 'video' && file.size > MAX_VIDEO_SIZE)) {
        showNotification(`File too large. Maximum size for ${type}s is ${type === 'image' ? '2MB' : '8MB'}`);
        return;
    }

    // Create preview
    const preview = document.createElement(type);
    preview.classList.add('media-preview');
    preview.file = file;

    // Add to chat input area
    const previewContainer = document.createElement('div');
    previewContainer.classList.add('media-preview-container');
    previewContainer.appendChild(preview);

    // Add cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('media-control-btn');
    cancelBtn.innerHTML = '<span class="material-symbols-rounded">close</span>';
    cancelBtn.onclick = () => previewContainer.remove();

    const controls = document.createElement('div');
    controls.classList.add('media-controls');
    controls.appendChild(cancelBtn);
    previewContainer.appendChild(controls);

    document.querySelector('.input-container').insertBefore(previewContainer, document.getElementById('msgBox'));

    // Read and show preview
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.src = e.target.result;
    }
    reader.readAsDataURL(file);

    // Prepare for upload
    mediaUploadQueue.push({
        file,
        type,
        previewContainer
    });
}

async function uploadMedia(mediaItem) {
    const { file, type, previewContainer } = mediaItem;
    const progressBar = document.createElement('div');
    progressBar.classList.add('media-upload-progress');
    previewContainer.appendChild(progressBar);

    try {
        // Create unique filename
        const ext = file.name.split('.').pop();
        const filename = `${type}_${Date.now()}.${ext}`;
        const storageRef = firebase.storage().ref();
        const mediaRef = storageRef.child(`chat_media/${filename}`);

        // Upload with progress tracking
        const uploadTask = mediaRef.put(file);
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = progress + '%';
            },
            (error) => {
                showNotification('Error uploading media');
                previewContainer.remove();
            },
            async () => {
                const url = await uploadTask.snapshot.ref.getDownloadURL();
                const message = {
                    type: type,
                    url: url,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    sender: auth.currentUser.uid
                };
                
                await db.collection('messages').add(message);
                previewContainer.remove();
                showNotification(`${type} sent successfully`);
            }
        );
    } catch (error) {
        showNotification('Error uploading media');
        previewContainer.remove();
    }
}

// Handle message sending with media
async function sendMessageWithMedia() {
    const text = document.getElementById('msgBox').value.trim();
    
    // Send text if present
    if (text) {
        await sendMessage(text);
        document.getElementById('msgBox').value = '';
    }

    // Upload any media in queue
    while (mediaUploadQueue.length > 0) {
        const mediaItem = mediaUploadQueue.shift();
        await uploadMedia(mediaItem);
    }
}

// Auto-resize textarea
function initTextarea() {
    const textarea = document.getElementById('msgBox');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        const newHeight = Math.min(this.scrollHeight, 100); // Max height of 100px
        this.style.height = newHeight + 'px';
    });
}