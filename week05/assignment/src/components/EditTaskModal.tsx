import React, { useState } from 'react';
import { ITask } from '..';

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: ITask | null;
  handleEditTask: Function; 
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onClose,
  task,
  handleEditTask

}) => {
  if (task === null) return null;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {

    handleEditTask(task.id, { ...task, title, description });

    // Close the modal
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 bg-gray-500 bg-opacity-75 z-50`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 rounded-lg w-96">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md text-slate-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md text-slate-900"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
            <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
