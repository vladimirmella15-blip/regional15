@echo off
echo Iniciando despliegue automatico a Azure...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1"
pause
