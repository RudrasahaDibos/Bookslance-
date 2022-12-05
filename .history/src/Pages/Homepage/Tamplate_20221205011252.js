import React from 'react';
import '../Homepage/Tamplate.css';
import Buro from "../images/buro.jpg"




const Tamplate = () => {
    return (
    
  <div  className='service'>

<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

</div>       
    );
};

export default Tamplate;