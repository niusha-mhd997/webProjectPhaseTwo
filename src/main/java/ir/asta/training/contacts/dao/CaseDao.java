package ir.asta.training.contacts.dao;

/**
 * Created by win_8.1 on 5/19/2019.
 */

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ir.asta.training.contacts.entities.CaseEntity;
import ir.asta.training.contacts.entities.ContactEntity;
import ir.asta.training.contacts.entities.StudentEntity;
import org.springframework.transaction.annotation.Transactional;

@Named("caseDao")
public class CaseDao {

    @PersistenceContext
    private EntityManager entityManager;

    public boolean AddCase(CaseEntity caseEntity) {
        entityManager.persist(caseEntity);
        return true;
    }

    public List<CaseEntity> getAllCases() {
        String entityName = "CaseEntity";
        return entityManager.createQuery("select e from " + entityName + " e").getResultList();
    }

    @Transactional
    public void deleteCase(Long id) {
        String entityName = "CaseEntity";
        Query q = entityManager.createQuery("delete from " + entityName);
        q.executeUpdate();

    }


    public List<CaseEntity> getCasesByUserToken(int token) {
        String entityName = "CaseEntity";
        String entityName2 = "StudentEntity";
        Query t = entityManager.createQuery("select e from " + entityName2 + " e WHERE" +
                " e.token = :token").setParameter("token", token);
        StudentEntity studentEntity = (StudentEntity) t.getResultList().get(0);
        String email = studentEntity.getEmail();

        Query q = entityManager.createQuery("select e from " + entityName + " e WHERE" +
                " e.SENDER.email = :email");
        q.setParameter("email", email);
        return q.getResultList();
    }

}
