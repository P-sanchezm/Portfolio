@echo off
title LinkedIn Portfolio Import Tool

echo ---------------------------------------------
echo  LinkedIn Portfolio Import Tool
echo ---------------------------------------------
echo.
echo  This tool does NOT scrape LinkedIn.
echo  It only reads files you exported manually from LinkedIn.
echo.
echo  1) On LinkedIn: Settings ^> Data privacy ^> Get a copy of your data
echo  2) Download the archive and extract it
echo  3) Copy the CSV files into:  public\imports\linkedin\
echo.
echo  Optional expected files:
echo     - Positions.csv
echo     - Education.csv
echo     - Certifications.csv
echo     - Honors.csv
echo     - Skills.csv
echo.
echo  This will (re)generate:  src\data\importedTimeline.ts
echo.
pause

rem move to the project root (this file lives in tools\)
cd /d "%~dp0\.."

if not exist "node_modules" (
  echo Installing dependencies first...
  call npm install
)

node scripts\import-linkedin-data.js

echo.
echo ---------------------------------------------
echo  Done. Review src\data\importedTimeline.ts
echo  Then run:  npm run dev
echo ---------------------------------------------
echo.
pause
