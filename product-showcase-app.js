const ProductShowcase = () => {
    const [activeCategory, setActiveCategory] = React.useState(null);
    const [modalProduct, setModalProduct] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [copiedState, setCopiedState] = React.useState(false);

    const categories = ['discount', 'desk setup', 'wallpaper', 'keyboard', 'mousepad', 'ghibli', 'figure', 'speaker', 'case'];

    const products = [
        { id: 1, name: 'Colorful Keyboard', category: 'keyboard', image: 'https://via.placeholder.com/200', discount: '-5%', discountCode: 'COLOR5', link: 'https://example.com/colorful-keyboard', buttonText: 'GO TO EXAMPLE.COM' },
        { id: 2, name: 'Keyboard Cable by PersonalLoot', category: 'desk setup', image: 'https://via.placeholder.com/200', discount: '-$5', discountCode: 'CABLE5', description: 'Design your own colorful cable - Desk Setup', link: 'https://example.com/personalloot', buttonText: 'GO TO PERSONALLOOT.COM' },
        { id: 3, name: 'BearFoot & Wishaven Sakura Bear Mousepad', category: 'mousepad', image: 'https://via.placeholder.com/200', discount: '-10%', discountCode: 'BEAR10', link: 'https://example.com/bearfoot', buttonText: 'GO TO BEARFOOD.COM' },
        { id: 4, name: 'Wooden Keyboard', category: 'keyboard', image: 'https://via.placeholder.com/200', link: 'https://example.com/wooden-keyboard', buttonText: 'GO TO WOODEN.COM' },
        // 可以繼續添加更多產品
    ];

    const socialLinks = [
        { icon: "fab fa-youtube", url: "https://www.youtube.com/" },
        { icon: "fab fa-pinterest", url: "https://www.pinterest.com/" },
        { icon: "fab fa-tiktok", url: "https://www.tiktok.com/" },
        { icon: "fab fa-instagram", url: "https://www.instagram.com/" }
    ];

    const filteredProducts = activeCategory
                ? (activeCategory === 'discount' 
                    ? products.filter(product => product.discount)
                    : products.filter(product => product.category === activeCategory))
                : products;

    const searchFilteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleCategory = (category) => {
        setActiveCategory(prevCategory => prevCategory === category ? null : category);
    };

    const openModal = (product) => {
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
        setCopiedState(false);
    };

    const copyDiscountCode = (discountCode) => {
        navigator.clipboard.writeText(discountCode);
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 1000);
    };

    return (
        <div className="container">
            <div className="header"></div>
            <div className="profile">
                <img src="https://via.placeholder.com/100" alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <h2>Anna Hsu</h2>
                    <p>test@gmail.com</p>
                    <div className="social-icons">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener nofollow">
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <i className="fas fa-search search-icon"></i>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="category-buttons">
                {categories.map(category => (
                    <button 
                        key={category}
                        className={`category-button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => toggleCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {searchFilteredProducts.map(product => (
                    <div key={product.id} className="product-item" onClick={() => openModal(product)}>
                        <img src={product.image} alt={product.name} />
                        {product.discount && <span className="discount-badge">{product.discount}</span>}
                    </div>
                ))}
            </div>
            {modalProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalProduct.image} alt={modalProduct.name} className="modal-image" />
                        <div className="modal-details">
                            <h2 className="modal-title">{modalProduct.name}</h2>
                            <p className="modal-description">{modalProduct.description || modalProduct.category}</p>
                            {modalProduct.discount && modalProduct.discountCode && (
                                <div className="discount-code" data-discount={`Discount ${modalProduct.discount}`}>
                                    <span>{modalProduct.discountCode}</span>
                                    <button onClick={() => copyDiscountCode(modalProduct.discountCode)} className={copiedState ? 'copied' : ''}>
                                        {copiedState ? 'COPIED!' : 'COPY'}
                                    </button>
                                </div>
                            )}
                            <a href={modalProduct.link} target="_blank" rel="noopener sponsored nofollow" className="buy-button">
                                {modalProduct.buttonText || 'GO TO PRODUCT PAGE'}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<ProductShowcase />, document.getElementById('root'));
