@echo off
echo Generating self-signed certificates for local HTTPS development...

REM Create certs directory if it doesn't exist
if not exist certs mkdir certs

REM Generate certificates using OpenSSL
openssl req -x509 -newkey rsa:2048 -keyout certs/localhost-key.pem -out certs/localhost.pem -days 365 -nodes -subj "/CN=192.168.1.165" -addext "subjectAltName=DNS:localhost,DNS:192.168.1.165,IP:192.168.1.165"

echo.
echo Certificates generated successfully!
echo Located in the ./certs directory
echo.