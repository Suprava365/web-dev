package com.example.backendproj.service.impl;

import com.example.backendproj.model.Student;
import com.example.backendproj.repository.StudentRepository;
import com.example.backendproj.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

        existingStudent.setName(student.getName());
        existingStudent.setAllotBed(student.getAllotBed());
        existingStudent.setMobile(student.getMobile());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setDob(student.getDob());
        existingStudent.setAddress1(student.getAddress1());
        existingStudent.setAddress2(student.getAddress2());
        existingStudent.setCity(student.getCity());
        existingStudent.setState(student.getState());
        existingStudent.setCountry(student.getCountry());
        existingStudent.setPhoto(student.getPhoto());

        return studentRepository.save(existingStudent);
    }

    @Override
    public void deleteStudent(Long id) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
        studentRepository.delete(existingStudent);
    }
}
