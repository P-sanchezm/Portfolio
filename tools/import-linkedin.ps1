<#
  LinkedIn Portfolio Import Tool (PowerShell)

  Does NOT scrape LinkedIn. It only reads CSV files you exported manually
  (Settings > Data privacy > Get a copy of your data) and placed in
  public\imports\linkedin\. Regenerates src\data\importedTimeline.ts.

  Usage:  right-click > Run with PowerShell, or:
          powershell -ExecutionPolicy Bypass -File tools\import-linkedin.ps1
#>

Write-Host "---------------------------------------------" -ForegroundColor Cyan
Write-Host " LinkedIn Portfolio Import Tool" -ForegroundColor Cyan
Write-Host "---------------------------------------------" -ForegroundColor Cyan
Write-Host ""
Write-Host " This tool does NOT scrape LinkedIn."
Write-Host " It only reads files you exported manually."
Write-Host ""
Write-Host " Put your exported CSVs in: public\imports\linkedin\"
Write-Host " Optional: Positions.csv, Education.csv, Certifications.csv, Honors.csv, Skills.csv"
Write-Host ""

# Move to project root (this script lives in tools\)
Set-Location -Path (Join-Path $PSScriptRoot "..")

if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies first..." -ForegroundColor Yellow
  npm install
}

node scripts\import-linkedin-data.js

Write-Host ""
Write-Host "Done. Review src\data\importedTimeline.ts, then run: npm run dev" -ForegroundColor Green
