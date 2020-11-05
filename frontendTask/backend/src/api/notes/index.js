module.exports = (app) => {
    app.get('/notes/get', require('./notesGet'));

    app.post('/notes/getById', require('./notesGetById'));
    app.post('/notes/deleteById', require('./notesDeleteById'));
    app.post('/notes/editById', require('./notesEditById'));
    app.post('/notes/add', require('./notesAdd'));
    app.post('/notes/editTagsById', require('./notesEditTagsById'));
    app.post('/notes/filterNoteTags', require('./notesFilterNoteTag'));
};