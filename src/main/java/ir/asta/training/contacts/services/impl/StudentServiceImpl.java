package ir.asta.training.contacts.services.impl;

/**
 * Created by win_8.1 on 5/18/2019.
 */
import javax.inject.Inject;
import javax.inject.Named;
import java.util.Random;
import ir.asta.training.contacts.entities.CaseEntity;
import ir.asta.training.contacts.entities.ContactEntity;
import ir.asta.training.contacts.entities.StudentEntity;
import ir.asta.training.contacts.manager.CaseManager;
import ir.asta.training.contacts.manager.ContactManager;
import ir.asta.training.contacts.manager.StudentManager;
import ir.asta.training.contacts.services.ContactService;
import ir.asta.training.contacts.services.StudentService;
import ir.asta.wise.core.datamanagement.ActionResult;

import java.util.List;

@Named("studentService")
public class StudentServiceImpl implements StudentService {

    @Inject
    StudentManager manager;


    @Inject
    CaseManager caseManager;


    @Override
    public ActionResult<StudentEntity> register(String email, String name, String pasword) {

        int max = 99999999;
        int min = 10000000;

        Random rand = new Random();
        int token = rand.nextInt((max - min) + 1) + min;

        StudentEntity entity = new StudentEntity();
        entity.setEmail(email);
        entity.setName(name);
        entity.setPassword(pasword);
        entity.setToken(token);

        if(manager.register(entity) == true){
            return new ActionResult<StudentEntity>(true, "با موفقیت ثبت نام شد", entity);
        }else{
            return new ActionResult<StudentEntity>(false, "این ایمیل قبلا ثبت شده", entity);
        }
    }

    @Override
    public ActionResult<String> AddCase(String subject,String description,String receiver, String senderemail, String senderpassword) {
        CaseEntity entity = new CaseEntity();
        entity.setSubject(subject);
        entity.setDescription(description);
        entity.setReceiver(receiver);

        try {
            StudentEntity studentEntity = manager.getStudentByEmail(senderemail, senderpassword);
            entity.setSTU(studentEntity);
            if (caseManager.AddCase(entity) == true) {
                return new ActionResult<String>(true, "مورد با موفقیت ثبت شد", "");

            } else {
                return new ActionResult<String>(false, "خطای ناشناخته", "");
            }
        }catch (Exception e){
            return new ActionResult<String>(false, "شما دسترسی لازم را ندارید!", "");
        }
    }

    @Override
    public List<CaseEntity> getCasesByUserToken(int token) {
        return caseManager.getCasesByUserToken(token);
    }

    @Override
    public List<StudentEntity> findAll() {
        return manager.findAll();
    }

    @Override
    public List<CaseEntity> getAllCases() {
        return caseManager.getAllCases();
    }

    @Override
    public ActionResult<String> delete(Long id) {
        caseManager.deleteCase(id);
        return new ActionResult<String>(true, "دیلیت با موفقیت ثبت شد", "");

    }


}
