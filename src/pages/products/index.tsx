import Header from '../../components/header'
import { useEffect,useState } from "react";

export interface Product{
  id?: number;
  product: string;
  price: number;
}

async function getQuotes() {
  
  const resPromise = fetch('https://665595013c1d3b60293a240d.mockapi.io/products',{
    cache:'no-cache',
  });

const [products] = await Promise.all([resPromise]);
return products;
}

// const Home = async () =>{
  export default function Home (){
    const [products,setProducts]=useState([]);

    // const res = await fetch('https://665595013c1d3b60293a240d.mockapi.io/products',{
    //   cache:'no-cache',
    // })
    // const resPromise = fetch('https://665595013c1d3b60293a240d.mockapi.io/products',{
    //   cache:'no-cache',
    // })

  

  // const [product1] = await Promise.all([resPromise]);

  // const products: Product [] = await res.json();
  useEffect(()=>{
  // debugger;
    fetch('https://665595013c1d3b60293a240d.mockapi.io/products',{
      cache:'no-cache',
    }).then((response)=>response.json()).then((data)=>{
      setProducts(data);
    })

  },[products]);

  const addToDB =async (e:FormData)=>{
    debugger
    const product=e.get('product')?.toString();
    const price=e.get('price')?.toString();

    if(!product || !price) return;

    const newProduct:Product={
      product:product,
      price:price
    }
    console.log('prodcuts are ', newProduct);

    await fetch('https://665595013c1d3b60293a240d.mockapi.io/products',{
      method:"Post",      
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct),
      cache:'no-cache',
    }).then((response)=>response.json()).then((data)=>{
      setProducts(data);
    })

  }
  
  // const quotes = use(getQuotes());
  return (
  <>
    <Header />
    <h2 className="text-3xl font-bold underline">Add Product</h2>
    <h2 className="text-3xl font-bold underline">{products.length}</h2>

    <form action={addToDB} className="max-w-md mx-auto">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="product" id="product" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder="enter product name" required
        />
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="number" name="price" id="price" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="enter price" required 
        />
    </div>
    <button type="submit" 
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Submit
    </button>
    </form>

    <h2 className="text-3xl font-bold underline">Product List</h2>
    <div className="flex flex-wrap gap-5">
      {products.map((prod)=>(
        <div key={prod.id} className='gap-5'>
        <p>{prod.product}</p>
        <p>{prod.price}</p>
        </div>        
      ))}
    </div>


  </>
  )
}
 
// export default Home