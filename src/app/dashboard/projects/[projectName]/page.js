export default async function ProjectDetailsPage({ params }) {
  const { projectName } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        {projectName}
      </h1>
    </div>
  );
}