@echo off

rem move to batch file's directory
cd /d %~dp0

rem %~f1: 1st arguments file's full path
certutil -hashfile "%~f1" SHA256 | CScript /NoLogo js\hash.js

pause
