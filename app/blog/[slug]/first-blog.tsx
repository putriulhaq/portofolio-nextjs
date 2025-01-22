type ProductProps = {
    params: {
      slug: string;
    };
  };
  
  export default function Product({ params }: ProductProps) {
    console.log(params.slug);
    return <h1>Detail {params.slug}</h1>;
  }