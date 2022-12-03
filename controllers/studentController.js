    import studentModel from "../models/studentModel.js"

class studentController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find();
            res.render('index', {data: result})
        } catch (error) {
            console.log(error);
        }
    }

    static createDoc = async (req, res) => {
        try {
            const {name, age, fees} = req.body;
            const addStudent = new studentModel({ name, age, fees });
            const result = await addStudent.save();
            res.redirect('/student')
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id);
            res.render('edit', {item: result})
        } catch (error) {
            console.log(error);
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/student')
        } catch (error) {
            console.log(error);
        }
    }

    static deletDocById = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id);
            res.redirect('/student')
        } catch (error) {
            console.log(error);
        }
    }
}

export default studentController    