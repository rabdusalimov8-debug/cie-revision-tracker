@echo off
title Cambridge A-Level Revision Tracker & Smart Guide
cd /d "%~dp0"

echo ======================================================
echo Launching Cambridge A-Level Revision Tracker...
echo Target: May 2027 Exams
echo ======================================================

set AGY_NODE="%APPDATA%\Antigravity\bin\agy-node.cmd"

if exist %AGY_NODE% (
    echo Starting local web server...
    call %AGY_NODE% server.js
    goto end
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting with Node.js...
    node server.js
    goto end
)

echo Opening directly in your default browser...
start "" "%~dp0index.html"

:end
