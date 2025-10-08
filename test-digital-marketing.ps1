# Test script for Digital Marketing Form Functionality
Write-Host "🧪 Testing Digital Marketing API Functionality..." -ForegroundColor Cyan
Write-Host ""

# Test data for consultation form
$consultationData = @{
    name = "John Doe"
    email = "john.doe@example.com"
    phone = "+1234567890"
    website = "https://johndoe.com"
    industry = "E-commerce"
    budget = "$5,000 - $10,000"
    formType = "consultation"
    formSource = "digital-marketing-page"
} | ConvertTo-Json

# Test data for audit form
$auditData = @{
    name = "Jane Smith"
    email = "jane.smith@example.com"
    phone = "+0987654321"
    website = "https://janesmith.com"
    industry = "Healthcare"
    budget = "$2,000 - $5,000"
    formType = "audit"
    formSource = "digital-marketing-page"
} | ConvertTo-Json

try {
    # Test 1: Consultation Form
    Write-Host "📋 Test 1: Digital Marketing Consultation Form" -ForegroundColor Yellow
    Write-Host "Data: $consultationData"
    
    $consultationResponse = Invoke-WebRequest -Uri "http://localhost:3000/api/digital-marketing-submission" -Method POST -Headers @{"Content-Type"="application/json"} -Body $consultationData -ErrorAction Stop
    
    if ($consultationResponse.StatusCode -eq 200) {
        Write-Host "✅ Consultation Form Test PASSED" -ForegroundColor Green
        Write-Host "Response: $($consultationResponse.Content)"
    } else {
        Write-Host "❌ Consultation Form Test FAILED" -ForegroundColor Red
        Write-Host "Status: $($consultationResponse.StatusCode)"
    }
    
    Write-Host ""
    Write-Host "=" * 50
    Write-Host ""
    
    # Test 2: Audit Form
    Write-Host "📋 Test 2: Website Audit Form" -ForegroundColor Yellow
    Write-Host "Data: $auditData"
    
    $auditResponse = Invoke-WebRequest -Uri "http://localhost:3000/api/digital-marketing-submission" -Method POST -Headers @{"Content-Type"="application/json"} -Body $auditData -ErrorAction Stop
    
    if ($auditResponse.StatusCode -eq 200) {
        Write-Host "✅ Audit Form Test PASSED" -ForegroundColor Green
        Write-Host "Response: $($auditResponse.Content)"
    } else {
        Write-Host "❌ Audit Form Test FAILED" -ForegroundColor Red
        Write-Host "Status: $($auditResponse.StatusCode)"
    }
    
    Write-Host ""
    Write-Host "=" * 50
    Write-Host ""
    
    # Test 3: Check if server is running
    Write-Host "🌐 Test 3: Server Status Check" -ForegroundColor Yellow
    try {
        $serverResponse = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -ErrorAction Stop
        Write-Host "✅ Server is running on port 3000" -ForegroundColor Green
    } catch {
        Write-Host "❌ Server is not running on port 3000" -ForegroundColor Red
        Write-Host "Please start the server with: npm run dev" -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "❌ Test Suite FAILED" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    
    if ($_.Exception.Message -like "*Unable to connect*") {
        Write-Host ""
        Write-Host "🔧 Troubleshooting Steps:" -ForegroundColor Yellow
        Write-Host "1. Make sure the development server is running" -ForegroundColor White
        Write-Host "2. Run: npm run dev" -ForegroundColor White
        Write-Host "3. Wait for the server to start completely" -ForegroundColor White
        Write-Host "4. Check if port 3000 is available" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "🎉 Test Suite Completed!" -ForegroundColor Cyan
Write-Host "📧 Check your email for welcome messages!" -ForegroundColor Green
Write-Host "📱 Check WhatsApp for team notifications!" -ForegroundColor Green
Write-Host "🗄️ Check MongoDB for saved submissions!" -ForegroundColor Green
