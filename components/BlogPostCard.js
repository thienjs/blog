export default function BlogPostCard() {
    return (
        <div className="relative flex w-1/4 h-[500px] mx-auto mt-10">
      {/* Gradient background of same width & height  as Blog post card  */}
      <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]">
        <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
          <div className="flex flex-col justify-center text-white">
            {/* PostImage */}

            <img src="/postImage.png" className="h-52 mb-5 rounded-lg" />
            {/* Post title */}

            <h1 className="text-3xl font-extrabold mb-4">
              This is first title.
            </h1>
            {/* Post Data/excerpt */}
            <p className="text-lg md:text-lg font-medium mb-6  ">
              Everything I Know About Style Guides, Design Systems, and
              Component Libraries
            </p>
          </div>
          {/* Author image with data */}
          <div className=" flex w-full justify-between mb-4">
            <span>
              <img
                src="/author.jpg"
                className="w-[75px] h-[80px] rounded-full  "
              />
            </span>
            <p className="text-lg mr-5 font-semibold text-white flex items-center justify-center">
              16 Nov, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
