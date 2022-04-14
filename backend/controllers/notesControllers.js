const asyncHandler = require('express-async-handler')

// @desc Get notes 
// @route GET /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
   res.status(200).json({ message: 'Get goals'}) 
});

// @desc Set note 
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'Set goal'}) 
 });
 
// @desc update note 
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update note ${req.params.id}`})
 });

// @desc Delete note 
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete note ${req.params.id}`}) 
 });


module.exports = {
    getNotes,
    setNote,
    updateNote,
    deleteNote
}