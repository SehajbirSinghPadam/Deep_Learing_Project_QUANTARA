@echo off
title Quantara AI Full Stack Launcher
echo ========================================================
echo   Starting Quantara AI Full Stack Terminal
echo ========================================================
echo.

set PROJECT_DIR=%~dp0

echo [1/2] Starting FastAPI Backend on http://127.0.0.1:8000 ...
if exist "%PROJECT_DIR%.venv\Scripts\activate.bat" (
    start "Quantara Backend (FastAPI)" cmd /k "cd /d "%PROJECT_DIR%" && call "%PROJECT_DIR%.venv\Scripts\activate.bat" && python web_app/server.py"
) else (
    start "Quantara Backend (FastAPI)" cmd /k "cd /d "%PROJECT_DIR%" && python web_app/server.py"
)

echo [2/2] Starting Next.js Production Server on http://localhost:3000 ...
start "Quantara Frontend (Next.js 14)" cmd /k "cd /d "%PROJECT_DIR%frontend" && npm run dev"

echo.
echo Both servers are launching!
echo Frontend: http://localhost:3000
echo Dashboard: http://localhost:3000/dashboard
echo Backend Static: http://127.0.0.1:8000
echo API Status: http://127.0.0.1:8000/api/status
echo.
pause

