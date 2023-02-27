import React from 'react' ;

const Home = () => {
    return (
        <div>
        <div className='add-to-cart'>
            <img src="./cart.png"/>
        </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                    
                </div>
                <div className='text-wrapper items'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:$1000
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;