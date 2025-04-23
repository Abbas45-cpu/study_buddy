<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Virtual Portal</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      min-height: 100vh;
      overflow-x: hidden;
      color: white;
    }

    .bg-crazy {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(circle, #ff4ecd, #007cf0, #00dfd8);
      filter: blur(80px);
      animation: float 12s ease-in-out infinite alternate;
    }

    @keyframes float {
      0% { transform: scale(1) translateY(0); }
      100% { transform: scale(1.1) translateY(-30px); }
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 60px;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      z-index: 10;
      position: relative;
    }

    .logo {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .logo img {
      width: 40px;
      margin-right: 10px;
    }

    .tabs {
      display: flex;
      gap: 30px;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-left: 60px;
    }

    .tabs a {
      text-decoration: none;
      color: #ffffffcc;
      font-size: 18px;
      position: relative;
      padding: 8px 4px;
      transition: color 0.3s ease;
    }

    .tabs a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0%;
      height: 2px;
      background: #00ffe7;
      transition: width 0.3s ease;
    }

    .tabs a:hover {
      color: #ffffff;
    }

    .tabs a:hover::after {
      width: 100%;
    }

    .login-btn {
      background: #00ffe7;
      color: #000;
      padding: 10px 20px;
      border: none;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .login-btn:hover {
      background: #00cfc0;
    }

    /* Focus styles for accessibility */
    .tabs a:focus,
    .login-btn:focus {
      outline: 2px solid #00ffe7;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      header {
        flex-direction: column;
        gap: 15px;
        padding: 20px;
      }

      .logo {
        align-self: flex-start; /* Align logo to the left on small screens */
      }

      .tabs {
        flex-direction: column;
        margin-left: 0;
        gap: 15px;
      }

      .login-btn {
        align-self: flex-end;
      }
    }

    /* Content section styles */
    .content-section {
      display: flex;
      width: 100%;
      height: 50vh; /* Half viewport height */
      margin-top: 40px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      overflow: hidden;
      backdrop-filter: blur(10px);
    }

    .content-section .image-container {
      flex: 1;
      overflow: hidden;
    }

    .content-section .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }