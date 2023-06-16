const axios = require('axios');

exports.getUsers = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    const users = response.data;
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, data: error });
  }
  const endTime = Date.now();
  console.log("it took: ", endTime - req.startTime, "ms");
}

exports.createOneUser = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/users', req.body);
        const user = response.data;
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, data: error });
    }
    
    const endTime = Date.now();
    console.log("it took: ", endTime - req.startTime, "ms");
}

exports.deleteOneUser = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:3000/users/${req.params.id}`);
        const status = response.status;
        res.status(200).json({ success: true, status });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, data: error });
    }

    const endTime = Date.now();
    console.log("it took: ", endTime - req.startTime, "ms");
}

exports.updateOneUser = async (req, res) => {
    try {
        const response = await axios.put(`http://localhost:3000/users/${req.params.id}`, req.body);
        const user = response.data;
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ success: false, data: error });
    }

    const endTime = Date.now();
    console.log("it took: ", endTime - req.startTime, "ms");
}