const storage = {
    get(){
        const data = localStorage.getItem('react_notepad');
        return data === undefined ? null : JSON.parse(data);
    },
    set(value){
        localStorage.setItem('react_notepad', JSON.stringify(value));
    }
}

export default storage;