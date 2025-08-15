import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppleTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Chief Financial Officer',
      company: 'TechGlobal Ltd',
      avatar: '👩‍💼',
      text: 'The migration from SAP to Workday was seamless. Zero downtime as promised, and the team guided us through every step. Exceptional service that exceeded our expectations.',
      rating: 5,
      metrics: [
        { value: '£2.5M', label: 'Cost Saved' },
        { value: '3 weeks', label: 'Completed' },
        { value: '0', label: 'Issues' },
      ],
      companyType: 'Enterprise',
      employeeCount: '5,000+',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'HR Director',
      company: 'InnovateCorp',
      avatar: '👨‍💼',
      text: 'Outstanding expertise and professionalism. The consultancy phase helped us optimize our payroll processes before migration. The ROI was evident within the first quarter.',
      rating: 5,
      metrics: [
        { value: '40%', label: 'Time Saved' },
        { value: '2 weeks', label: 'Timeline' },
        { value: '100%', label: 'Accuracy' },
      ],
      companyType: 'SME',
      employeeCount: '500-1000',
    },
    {
      id: 3,
      name: 'Emma Thompson',
      title: 'Operations Manager',
      company: 'HealthcarePlus',
      avatar: '👩‍⚕️',
      text: 'Complex multi-country payroll migration handled flawlessly. The compliance expertise was invaluable for our healthcare organization with strict regulatory requirements.',
      rating: 5,
      metrics: [
        { value: '12', label: 'Countries' },
        { value: '6 weeks', label: 'Duration' },
        { value: '100%', label: 'Compliance' },
      ],
      companyType: 'Enterprise',
      employeeCount: '2,000+',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      title: 'Finance Director',
      company: 'StartupPro',
      avatar: '👨‍💻',
      text: 'Perfect for our growing startup. The SME solution was cost-effective and scalable. The team understood our budget constraints while delivering premium service.',
      rating: 5,
      metrics: [
        { value: '£50K', label: 'Budget Saved' },
        { value: '1 week', label: 'Quick Setup' },
        { value: '24/7', label: 'Support' },
      ],
      companyType: 'SME',
      employeeCount: '50-200',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className='apple-star-rating'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`apple-star ${i < rating ? 'apple-star-filled' : 'apple-star-empty'}`}
            viewBox='0 0 20 20'
            width='16'
            height='16'
          >
            <path
              d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
              fill='currentColor'
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className='apple-testimonials'>
      <div className='apple-container'>
        <motion.div
          className='apple-section-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='apple-section-eyebrow'>Client Success Stories</div>
          <h2 className='apple-section-title'>Trusted by Industry Leaders</h2>
          <p className='apple-section-subtitle'>
            See how we've helped organizations of all sizes achieve successful payroll migrations
            with zero downtime and maximum efficiency.
          </p>
        </motion.div>

        <div className='apple-testimonials-container'>
          <div className='apple-testimonials-main'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                className='apple-testimonial-featured'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className='apple-testimonial-content'>
                  <div className='apple-testimonial-quote-icon'>
                    <svg viewBox='0 0 24 24' width='40' height='40'>
                      <path
                        d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>

                  <p className='apple-testimonial-text'>"{testimonials[activeIndex].text}"</p>

                  <div className='apple-testimonial-rating'>
                    <StarRating rating={testimonials[activeIndex].rating} />
                  </div>
                </div>

                <div className='apple-testimonial-author'>
                  <div className='apple-testimonial-avatar'>
                    <span>{testimonials[activeIndex].avatar}</span>
                  </div>
                  <div className='apple-testimonial-info'>
                    <div className='apple-testimonial-name'>{testimonials[activeIndex].name}</div>
                    <div className='apple-testimonial-title'>{testimonials[activeIndex].title}</div>
                    <div className='apple-testimonial-company'>
                      {testimonials[activeIndex].company}
                    </div>
                    <div className='apple-testimonial-meta'>
                      <span className='apple-testimonial-type'>
                        {testimonials[activeIndex].companyType}
                      </span>
                      <span className='apple-testimonial-separator'>•</span>
                      <span className='apple-testimonial-employees'>
                        {testimonials[activeIndex].employeeCount} employees
                      </span>
                    </div>
                  </div>
                </div>

                <div className='apple-testimonial-metrics'>
                  {testimonials[activeIndex].metrics.map((metric, index) => (
                    <div key={index} className='apple-testimonial-metric'>
                      <span className='apple-testimonial-metric-value'>{metric.value}</span>
                      <span className='apple-testimonial-metric-label'>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className='apple-testimonials-controls'>
              <button
                className='apple-testimonial-nav apple-testimonial-prev'
                onClick={prevTestimonial}
              >
                <svg viewBox='0 0 24 24' width='20' height='20'>
                  <path
                    d='M15 18l-6-6 6-6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                  />
                </svg>
              </button>

              <div className='apple-testimonials-dots'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`apple-testimonial-dot ${index === activeIndex ? 'apple-testimonial-dot-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button
                className='apple-testimonial-nav apple-testimonial-next'
                onClick={nextTestimonial}
              >
                <svg viewBox='0 0 24 24' width='20' height='20'>
                  <path
                    d='M9 18l6-6-6-6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='apple-testimonials-sidebar'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`apple-testimonial-card ${index === activeIndex ? 'apple-testimonial-card-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className='apple-testimonial-card-avatar'>
                  <span>{testimonial.avatar}</span>
                </div>
                <div className='apple-testimonial-card-info'>
                  <div className='apple-testimonial-card-name'>{testimonial.name}</div>
                  <div className='apple-testimonial-card-company'>{testimonial.company}</div>
                  <div className='apple-testimonial-card-type'>{testimonial.companyType}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTestimonials;
