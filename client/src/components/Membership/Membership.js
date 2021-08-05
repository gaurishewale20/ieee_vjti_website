import React from 'react';
import './Membership.css';

import { Author, Conference, Education, Employer_Job_Seekers, FAQ, Media, Member_Benefit, Research, Student, Volunteer, Women_Eng, Young_Professional } from './imports';

const Membership = () => {
    return (
        <>
         <div className="contain">
            <h1 className="text-center display-4 title" style={{margin: '100px 0'}} data-aos="fade-up" data-aos-duration="1000">MEMBERSHIP BENEFITS</h1>
            {/* ROW 1 */}
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-md-6 col-xl-4">
                    <div className="card mx-auto">
                        <div className="wrapper-img">
                            <img src={ Author } alt="author_image" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Authors</h4>
                            <p className="card-text text-muted">Get resources and videos to help you write and publish your work.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/publications_standards/publications/authors/author_information.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4 ">
                    <div className="card mx-auto">
                        <div className="wrapper-img">
                            <img src={ Conference } alt="conference_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Conference Organisers</h4>
                            <p className="card-text text-muted">Organise insightful conferences with IEEE's guidance and training and be a part of their conferences commitee.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/conferences_events/conferences/organizers/organizers_index.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto">
                        <div className="wrapper-img">
                            <img src={ Education } alt="eduation_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Education</h4>
                            <p className="card-text text-muted">Let IEEE help your education with access to tons of resources, scholarships and access to award program opportunities.</p>
                        </div>
                        <div className=" card-footer text-end">
                            <a href="https://www.ieee.org/education/index.html" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
            
                {/* <!-- ROW 2 --> */}
                <div className="col-md-6 col-xl-4">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ Student } alt="student_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Like-Minded Students</h4>
                            <p className="card-text text-muted">Network with students united by a common desire to continuously learn, interact, collaborate, and innovate.</p>
                        </div>
                        <div className=" card-footer text-end">
                            <a href="https://www.ieee.org/membership_services/membership/students/index_students.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ FAQ } alt="faq_img" className="card-img-top rounded border-bottom border-2" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">FAQs</h4>
                            <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>   
                        <div className="card-footer text-end">
                            <a href="https://supportcenter.ieee.org/app/home?utm_source=hp&utm_campaign=faq&utm_medium=how&utm_term=support%20center%2C%20faqs&WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4 ">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ Volunteer } alt="volunteer_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Volunteers</h4>
                            <p className="card-text text-muted"> Enrich your technical knowledge and gain valuable management and leadership skills.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/about/volunteers/volunteer_index.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
        
                {/* <!-- ROW 3 --> */}
                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ Member_Benefit } alt="member_benefits_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Members</h4>
                            <p className="card-text text-muted">Get access to new resources, valuable opportunities, and many discounts that will help you advance your career in the right direction. </p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/membership/index.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4 ">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ Media } alt="media_img" className="card-img-top rounded border-bottom border-2" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Media and Journalists</h4>
                            <p className="card-text text-muted">Learn how to request a media interview, see IEEE’s mission, learn about its leadership, find fact sheets, read recent IEEE news, and more.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/about/news/media_kit/media_kit_index.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={ Research } alt="research_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Research Papers</h4>
                            <p className="card-text text-muted">Get access to the industry's most essential technical information and research papers.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp?utm_source=hp&utm_campaign=xpl_research&utm_medium=how&utm_term=Xplore%20researchers&WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 4 --> */}
                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={Women_Eng} alt="women_in_eng_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Women In Engineering</h4>
                            <p className="card-text text-muted"> Join a global network of IEEE members who have an interest in inspiring women engineers to follow a career in engineering and science.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/membership_services/membership/women/women_in_engineering.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={Employer_Job_Seekers} alt="employers_and_employees_img" className="card-img-top rounded border-bottom border-2" />
                        </div>
                        <div className="card-body pb-0">
                            <h4 className="card-title">Employers and Job Seekers</h4>
                            <p className="card-text text-muted">Get the opportunity to recruit highly qualified IEEE member candidates and leverage employment opportunities.</p>
                        </div>
                        <div className="card-footer text-end pt-0">
                            <a href="https://www.ieee.org/education_careers/careers/employers_job_seekers.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="card mx-auto" data-aos="fade-up" data-aos-duration="1000">
                        <div className="wrapper-img">
                            <img src={Young_Professional} alt="young_professional_img" className="card-img-top rounded" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Young Professionals</h4>
                            <p className="card-text text-muted">Elevate your professional image and expand your global network by connecting with peers.</p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://www.ieee.org/membership_services/membership/young_professionals/index_young_professionals.html?WT.mc_id=" className="btn btn-primary btn-responsive" target='_blank'>More Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Membership;
