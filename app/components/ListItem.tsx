import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

// Define BlogPost type
interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  role: string;
}

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-6 flow-root sm:mt-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
          <dl className="md:col-span-3 order-3 md:order-1">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              <Link className="hover:underline" href={`/posts/${id}`}>
                {title}
              </Link>
            </div>
            <span className=" text-gray-500 dark:text-gray-400">
              {formattedDate}
            </span>
          </dl>
        </div>
      </div>
    </li>
  );
}
