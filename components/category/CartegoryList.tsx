import Link from "next/link";
import { TCartegory } from "@/types";

const getCategories = async (): Promise<TCartegory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/cartegories`);
    if (res.ok) {
      const data = await res.json();
      return data.cartegories;
    } else {
      console.error('Failed to fetch categories:', res.statusText);
    }
  } catch (error) {
    console.error('An error occurred while fetching categories:', error);
  }
  return null;
};

export default async function CategoriesList() {
  const categories = await getCategories();
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categories ? (
        categories.map((category) => (
          <Link
            key={category.id}
            className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
            href={`/categories/${category.catName}`}
          >
            {category.catName}
          </Link>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
}
