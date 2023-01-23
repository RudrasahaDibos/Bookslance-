import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../Homepage/Tamplate.css';
import Product from '../Homepage/Product';

const Tamplate = () => {

   const[Products,Setproduct]=useState([])


  useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>Setproduct (data))


  },[])



    return (
     
  <div>
      

  <h1>Product:{Products.length}</h1>


  <div>

    {
      Products.map(Product=><Prod)
    }
  </div>
      
{/* 
<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src={chader } alt="Denim Jeans" />
  <h1 className='name'>বিভূতিভূষণ বন্দ্যোপাধ্যায়</h1>
  <p class="price">150 Tk </p>
  <p class="Category"> Category :
  শিশু-কিশোর: রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={charpo } alt="Denim Jeans" />
  <h1 className='name'>  সুকান্ত ভট্টাচার্য</h1>
  <p class="price">109 Tk </p>
  <p class="Category"> Category :
  চিরায়ত কাব্য</p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={Dena} alt="Denim Jeans" />
  <h1 className='name'>শরৎচন্দ্র চট্টোপাধ্যায়</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :

  চিরায়ত উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src={ digital } alt="Denim Jeans" />
  <h1 className='name'>  তানভীর এ মিশুক</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
  ব্যবসা ও অর্থনীতি বিষয়ক প্রবন্ধ, গবেষণা ও পরিসংখ্যান </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={dui} alt="Denim Jeans" />
  <h1 className='name'>  রবীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">130 Tk </p>
  <p class="Category"> Category :
  চিরায়ত উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={japan } alt="Denim Jeans" />
  <h1 className='name'> রবীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">105 Tk </p>
  <p class="Category"> Category :
  ভ্রমণ ও প্রবাস: ক্লাসিক </p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={jiboni } alt="Denim Jeans" />
  <h1 className='name'>  সুকুমার রায়</h1>
  <p class="price">180 Tk </p>
  <p class="Category"> Category :

  আত্ম-চরিত </p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={kisna} alt="Denim Jeans" />
  <h1 className='name'> বঙ্কিমচন্দ্র চট্টোপাধ্যায়</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :

  চিরায়ত উপন্যাস</p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={nowka } alt="Denim Jeans" />
  <h1 className='name'> রবীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :

  চিরায়ত উপন্যাসস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="car">
  <Link>See more <i class="fa-solid fa-arrow-right"></i>   </Link>
</div> */}

</div>       
    );
};

export default Tamplate;