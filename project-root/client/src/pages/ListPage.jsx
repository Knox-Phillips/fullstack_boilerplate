import FormSub from "../components/FormSub";
import List from "../components/List";

export default function ItemsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Item Tracker
        </h1>
        <FormSub />
        <List />
      </div>
    </div>
  );
}
