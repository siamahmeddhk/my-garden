


import React, { useState, useEffect } from 'react';
import SingleTips from '../comp/Singeltips';

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTips = async (level = '') => {
    try {
      setLoading(true);
      const query = level ? `?difficultyLevel=${level}` : '';
      const response = await fetch(`https://y-gray-seven.vercel.app/tips${query}`);
      const data = await response.json();
      setTips(data);
    } catch (err) {
      console.error('Error fetching tips:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTips(difficulty);
  }, [difficulty]);

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-3 items-center">
        <label className="text-sm font-medium">Filter by Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="select select-bordered select-sm max-w-xs"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.length > 0 ? (
              tips.map((tip) => <SingleTips key={tip._id} tip={tip} />)
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500">
                  No tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BrowseTips;
