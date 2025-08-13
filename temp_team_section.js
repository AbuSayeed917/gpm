      {/* Premium Team Section - Best Possible Design */}
      <section style={{ 
        padding: '120px 0 80px 0', 
        background: 'linear-gradient(135deg, #f8f6ff 0%, #fef7ff 50%, #f0f8ff 100%)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Premium Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '40%',
          height: '140%',
          background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(-15deg)',
          animation: 'float 12s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '35%',
          height: '120%',
          background: 'radial-gradient(ellipse, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
          transform: 'rotate(20deg)',
          animation: 'float 15s ease-in-out infinite reverse'
        }} />

        <div style={{ maxWidth: '95%', margin: '0 auto', padding: '0 22px', position: 'relative', zIndex: 2 }}>
          {/* Premium Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-120px" }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(168, 85, 247, 0.1)',
                borderRadius: '20px',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(168, 85, 247, 0.2)'
              }}
            >
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#a855f7',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Our Expert Team
              </span>
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '700',
              color: '#1d1d1f',
              marginBottom: '24px',
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #1d1d1f 0%, #4c1d95 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              The people behind
              <br />
              <span style={{ 
                background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                seamless migrations.
              </span>
            </h2>
            
            <p style={{
              fontSize: '20px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.5',
              letterSpacing: '0.01em',
              fontWeight: '400'
            }}>
              Meet the migration specialists who make complex payroll transitions feel effortless.
            </p>
          </motion.div>

          {/* Premium Team Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '32px',
            maxWidth: '95%',
            margin: '0 auto'
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    boxShadow: '0 32px 80px rgba(0, 0, 0, 0.12)',
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'saturate(180%) blur(20px)',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                >
                  {/* Gradient Header */}
                  <div style={{
                    height: '120px',
                    background: `linear-gradient(135deg, 
                      ${index % 2 === 0 
                        ? 'rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.9)' 
                        : 'rgba(251, 191, 36, 0.8), rgba(245, 158, 11, 0.9)'
                      })`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0 32px 20px'
                  }}>
                    {/* Background Pattern */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                                       radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
                      opacity: 0.6
                    }} />
                    
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#ffffff',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        zIndex: 2,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {member.name.charAt(0)}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '32px', position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '24px',
                      width: '60px',
                      height: '6px',
                      background: `linear-gradient(90deg, ${index % 2 === 0 ? '#a855f7' : '#f59e0b'}, transparent)`,
                      borderRadius: '3px'
                    }} />
                    
                    <div style={{ marginTop: '8px' }}>
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#1d1d1f',
                        marginBottom: '8px',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em'
                      }}>
                        {member.name}
                      </h3>
                      
                      <p style={{
                        fontSize: '16px',
                        color: index % 2 === 0 ? '#a855f7' : '#f59e0b',
                        fontWeight: '600',
                        marginBottom: '12px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        letterSpacing: '0.01em'
                      }}>
                        {member.role}
                      </p>
                      
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '6px 12px',
                        background: 'rgba(168, 85, 247, 0.08)',
                        borderRadius: '12px',
                        marginBottom: '20px'
                      }}>
                        <span style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          fontWeight: '500',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}>
                          {member.experience} experience
                        </span>
                      </div>
                      
                      <p style={{
                        fontSize: '17px',
                        lineHeight: '1.6',
                        color: '#374151',
                        marginBottom: '24px',
                        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '400'
                      }}>
                        {member.description}
                      </p>
                      
                      {/* Specialties */}
                      <div>
                        <h4 style={{
                          fontSize: '15px',
                          fontWeight: '700',
                          color: '#1d1d1f',
                          marginBottom: '16px',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Areas of Expertise
                        </h4>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {member.specialties.map((specialty, sIndex) => (
                            <motion.span
                              key={sIndex}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              style={{
                                background: `linear-gradient(135deg, ${index % 2 === 0 
                                  ? 'rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05)' 
                                  : 'rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05)'
                                })`,
                                color: index % 2 === 0 ? '#7c3aed' : '#d97706',
                                padding: '8px 14px',
                                borderRadius: '16px',
                                fontSize: '13px',
                                fontWeight: '600',
                                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                                border: `1px solid ${index % 2 === 0 ? 'rgba(168, 85, 247, 0.2)' : 'rgba(251, 191, 36, 0.2)'}`,
                                backdropFilter: 'blur(10px)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {specialty}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/quote"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: '600',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                Ready to work with our team?
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>