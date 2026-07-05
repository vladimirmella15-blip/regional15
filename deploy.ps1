# deploy.ps1
# Script de automatización de despliegue para Regional 15 Web a Azure VM

$IP_VM = "158.23.163.251"
$USER_VM = "azureuser"
$KEY_PATH = "./PabloM.pem"
$REMOTE_DIR = "/home/azureuser/regional15"

Write-Host "=== 1. Creando paquete comprimido de la aplicación ===" -ForegroundColor Cyan
if (Test-Path "workspace.tar.gz") { Remove-Item "workspace.tar.gz" }
tar --exclude="node_modules" --exclude=".next" --exclude=".git" --exclude="PabloM.pem" --exclude="workspace.tar.gz" --exclude="deploy.ps1" --exclude="deploy.bat" --exclude="Videos Regional" --exclude="public/assets/videos" --exclude="data/regional15.db" -czf workspace.tar.gz .

Write-Host "=== 2. Subiendo paquete al servidor Azure ($IP_VM) ===" -ForegroundColor Cyan
scp -i $KEY_PATH -o StrictHostKeyChecking=no workspace.tar.gz "${USER_VM}@${IP_VM}:${REMOTE_DIR}/workspace.tar.gz"

Write-Host "=== 3. Extrayendo archivos y compilando en el servidor ===" -ForegroundColor Cyan
ssh -i $KEY_PATH -o StrictHostKeyChecking=no "${USER_VM}@${IP_VM}" "cd $REMOTE_DIR && rm -f app/page.tsx && tar -xzf workspace.tar.gz && rm -f workspace.tar.gz && npm install --legacy-peer-deps && npm run build && node scripts/seed-director.js && pm2 delete regional15-web 2>/dev/null; pm2 start npm --name regional15-web --cwd $REMOTE_DIR -- start && pm2 save"

Write-Host "=== 4. Limpiando archivos temporales locales ===" -ForegroundColor Cyan
if (Test-Path "workspace.tar.gz") { Remove-Item "workspace.tar.gz" }

Write-Host "=== ¡Despliegue finalizado con éxito! ===" -ForegroundColor Green
Write-Host "Visita tu sitio en http://$IP_VM" -ForegroundColor Yellow
