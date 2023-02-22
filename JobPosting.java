package com.axis.jobOpporunites.model;

import jakarta.persistence.*;

@Entity
@Table(name = "jobposting")
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "jobId", unique = true, nullable = false)
    private int jobId;

    @ManyToOne
    @JoinColumn(name = "companyId")
    private Company company;

    @Column(name = "state")
    private int state;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "responsibilities")
    private String responsibilties;

    @Column(name = "location")
    private String location;

    @Column(name = "salary")
    private String salary;

    @Column(name = "keywords")
    private String keywords;

    // @OneToMany(mappedBy="passenger", cascade = CascadeType.ALL)
    // @JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class,
    // property="orderId")
    // private List<Reservation> reservations;

    public int getJobId() {
        return jobId;
    }

    public void setjobId(int jobId) {
        this.jobId = jobId;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public int getState() {
        return state;
    }

    public void setState(int State) {
        this.state = State;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String Title) {
        this.title = Title;
    }

    public String getResponsibilities() {
        return responsibilties;
    }

    public void setResponsibilities(String Responsibilities) {
        this.responsibilties = Responsibilities;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String Description) {
        this.description = Description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String Location) {
        this.location = Location;

    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String Salary) {
        this.salary = Salary;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
}
