interface VideoParams {
  seriesid: string;
}

async function loadSeries(seriesid: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${seriesid}`,
  );

  const data = await response.json();
  return data;
}

async function page({ params }: { params: VideoParams }) {
  const post = await loadSeries(params.seriesid);
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}

export default page;
