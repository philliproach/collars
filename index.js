<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dakota's Custom Collars | Handmade Dog Collars in Corydon, Indiana</title>
    <style>
        :root {
            --primary: #3a7d44;
            --secondary: #f8b400;
            --light: #f5f5f5;
            --dark: #333;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        
        header {
            background-color: var(--primary);
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        nav {
            background-color: var(--dark);
            padding: 0.5rem;
            text-align: center;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 1rem;
            padding: 0.5rem;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: var(--secondary);
        }
        
        .hero {
            height: 400px;
            background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/api/placeholder/1200/400");
            background-size: cover;
            background-position: center;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 1rem;
        }
        
        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
        }
        
        .cta-button {
            display: inline-block;
            background-color: var(--secondary);
            color: var(--dark);
            padding: 0.75rem 1.5rem;
            margin-top: 1rem;
            text-decoration: none;
            font-weight: bold;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .cta-button:hover {
            background-color: #e5a600;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        
        .section-title {
            text-align: center;
            color: var(--primary);
            margin-bottom: 2rem;
        }
        
        .products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .product-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
        }
        
        .product-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .product-info {
            padding: 1rem;
        }
        
        .product-info h3 {
            margin-top: 0;
            color: var(--primary);
        }
        
        .price {
            font-weight: bold;
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .about {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 2rem 0;
        }
        
        .about-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
        }
        
        .about-text {
            max-width: 800px;
        }
        
        .testimonials {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .testimonial {
            background-color: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
        }
        
        .testimonial-author {
            font-weight: bold;
            color: var(--primary);
        }
        
        .contact {
            background-color: var(--primary);
            color: white;
            padding: 2rem 1rem;
            text-align: center;
        }
        
        .contact-container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .contact-info div {
            flex: 1;
            min-width: 200px;
        }
        
        form {
            display: grid;
            gap: 1rem;
            max-width: 500px;
            margin: 0 auto;
        }
        
        input, textarea {
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
        }
        
        button {
            background-color: var(--secondary);
            color: var(--dark);
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #e5a600;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 1rem;
        }
        
        @media (max-width: 768px) {
            .hero h2 {
                font-size: 2rem;
            }
            
            nav {
                display: flex;
                flex-direction: column;
            }
            
            nav a {
                display: block;
                margin: 0.5rem 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Dakota's Custom Collars</h1>
        <p>Handmade Dog Collars in Corydon, Indiana</p>
    </header>
    
    <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <section id="home" class="hero">
        <h2>Unique, Handcrafted Dog Collars</h2>
        <p>Designed with love in Corydon, Indiana. Each collar is crafted with premium materials and attention to detail for your furry best friend.</p>
        <a href="#products" class="cta-button">Shop Now</a>
    </section>
    
    <section id="products" class="container">
        <h2 class="section-title">Our Products</h2>
        <div class="products">
            <div class="product-card">
                <img src="/api/placeholder/300/200" alt="Classic Collar" class="product-img">
                <div class="product-info">
                    <h3>Classic Collar</h3>
                    <p>Durable and comfortable, the classic collar is perfect for everyday wear.</p>
                    <p class="price">$24.99</p>
                </div>
            </div>
            
            <div class="product-card">
                <img src="/api/placeholder/300/200" alt="Premium Leather Collar" class="product-img">
                <div class="product-info">
                    <h3>Premium Leather Collar</h3>
                    <p>Made with high-quality leather for a sophisticated look that will last for years.</p>
                    <p class="price">$39.99</p>
                </div>
            </div>
            
            <div class="product-card">
                <img src="/api/placeholder/300/200" alt="Decorated Collar" class="product-img">
                <div class="product-info">
                    <h3>Decorated Collar</h3>
                    <p>Add some flair with our hand-decorated collars, featuring unique patterns and embellishments.</p>
                    <p class="price">$29.99</p>
                </div>
            </div>
            
            <div class="product-card">
                <img src="/api/placeholder/300/200" alt="Seasonal Collar" class="product-img">
                <div class="product-info">
                    <h3>Seasonal Collar</h3>
                    <p>Celebrate the holidays with our seasonal designs, perfect for festive occasions.</p>
                    <p class="price">$27.99</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="about" class="container">
        <h2 class="section-title">About Dakota</h2>
        <div class="about">
            <img src="/api/placeholder/400/400" alt="Dakota Wright" class="about-img">
            <div class="about-text">
                <p>Hi, I'm Dakota Wright! I've been making custom dog collars in my workshop in Corydon, Indiana for over 5 years. What started as a hobby creating unique collars for my own dogs quickly grew into a small business when friends and family started requesting custom pieces.</p>
                <p>Each collar is handcrafted with care, using only high-quality materials that are both durable and comfortable for your furry friend. I believe that our pets deserve accessories that are as unique and special as they are!</p>
                <p>While I primarily serve the Corydon area and surrounding communities, I'm happy to ship my collars across the United States to make sure dogs everywhere can enjoy my custom creations.</p>
            </div>
        </div>
    </section>
    
    <section id="testimonials" class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonials">
            <div class="testimonial">
