// uploading resume (pdf) through this

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


const uploadResume = multer({storage:storage})

export default uploadResume