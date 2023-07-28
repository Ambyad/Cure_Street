import express from 'express';
import { register ,login, scheduleTherapist, editScheduleTherapist, therapistregister, therapistlogin,bookingschedule, appointmentcheduleforpatient, appointmentchedulefortherapist, insertscheduleTherapist, appointmentcancel} from '../controllers/auth';
import { reportInsert,getReport } from '../controllers/report';
import { therapist } from '../controllers/auth';
const router = express.Router();

// router.get("/:message",showMessage)
router.post("/register",register)

router.post("/login",login)

router.post("/therapist-register",therapistregister)

router.post("/therapist-login",therapistlogin)

router.get("/therapist",therapist)

router.post("/schedule-therapist",scheduleTherapist)

router.get("/schedule-therapist",scheduleTherapist)

router.post("/addordelete-schedule-therapist",editScheduleTherapist)

router.post("/update-schedule-therapist",insertscheduleTherapist)

router.post("/book-schedule",bookingschedule)


router.post("/get-appointmet-patient",appointmentcheduleforpatient)

router.post("/get-appointmet-therapist",appointmentchedulefortherapist)

router.post("/upload-report",reportInsert)

router.post("/get-report",getReport)

router.post('/cancel-appointment',appointmentcancel)




module.exports = router;