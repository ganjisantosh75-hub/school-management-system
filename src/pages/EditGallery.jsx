  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import AdminLayout from "../component/admin/AdminLayout";

  function EditGallery() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      title: "",
      category: "",
      eventDate: "",
      description: "",
      image: null,
    });

    const [oldImage, setOldImage] = useState("");

    useEffect(() => {
      fetchGallery();
    }, []);

    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/gallery/${id}`
        );

        const data = await response.json();

        if (data.success) {
          setFormData({
            title: data.data.title,
            category: data.data.category,
            eventDate: data.data.eventDate.slice(0, 10),
            description: data.data.description,
            image: null,
          });

          setOldImage(data.data.image);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleChange = (e) => {
      const { name, value, files } = e.target;

      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    };

    return (
      <AdminLayout>
        <div className="max-w-5xl mx-auto py-10">

          <h1 className="text-4xl font-bold mb-8">
            Edit Gallery
          </h1>

          <form className="bg-white shadow-lg rounded-xl p-8">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="font-semibold block mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option>Annual Day</option>
                  <option>Sports Day</option>
                  <option>Independence Day</option>
                  <option>Republic Day</option>
                  <option>Science Exhibition</option>
                  <option>Cultural Program</option>
                  <option>Picnic</option>
                  <option>Workshop</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Event Date
                </label>

                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="font-semibold block mb-2">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mt-6">
              <label className="font-semibold block mb-2">
                Change Image
              </label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-2">
                Current Image
              </p>

              <img
                src={`http://localhost:5000/${oldImage}`}
                alt="Gallery"
                className="w-72 rounded-lg border"
              />
            </div>

          </form>

        </div>
      </AdminLayout>
    );
  }

  export default EditGallery;