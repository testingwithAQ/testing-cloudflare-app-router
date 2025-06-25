'use client'
import { useParams } from 'next/navigation';

export const runtime = "edge";

const ShowUrlValue = () => {
  const params = useParams();
  const slug = params.slug;

  return (
    <div>
      <h1>Slug Value :</h1>
      <p>{slug}</p>
    </div>
  );
};

export default ShowUrlValue;