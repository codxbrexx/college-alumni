import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

/**
 * Send job approval notification email
 * @param {Object} job - Job object
 * @param {Object} user - User who posted the job
 */
export const sendJobApprovalEmail = async (job, user) => {
    const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@netgrud.com',
        to: user.email,
        subject: `Job Approved: ${job.title}`,
        html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #000;">
                <h1 style="font-size: 32px; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">Job Approved</h1>
                <p style="font-size: 16px; line-height: 1.6;">Hello ${user.fullName || user.username},</p>
                <p style="font-size: 16px; line-height: 1.6;">Your job posting has been approved and is now live on the NetGrud Alumni Platform.</p>
                
                <div style="background: #f9fafb; padding: 20px; margin: 20px 0; border-left: 4px solid #dc2626;">
                    <h2 style="margin: 0 0 10px 0; font-size: 24px;">${job.title}</h2>
                    <p style="margin: 5px 0;"><strong>Company:</strong> ${job.company}</p>
                    <p style="margin: 5px 0;"><strong>Location:</strong> ${job.location}</p>
                    <p style="margin: 5px 0;"><strong>Stipend:</strong> ${job.stipend}</p>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6;">Alumni can now view and apply to your job posting.</p>
                
                <a href="${process.env.FRONTEND_URL}/job/${job._id}" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; margin-top: 20px;">
                    View Job Posting
                </a>
                
                <p style="font-size: 14px; color: #6b7280; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    NetGrud College Alumni Platform<br>
                    This is an automated message, please do not reply.
                </p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Approval email sent to ${user.email}`);
    } catch (error) {
        console.error('Failed to send approval email:', error);
    }
};

/**
 * Send job rejection notification email
 * @param {Object} job - Job object
 * @param {Object} user - User who posted the job
 */
export const sendJobRejectionEmail = async (job, user) => {
    const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@netgrud.com',
        to: user.email,
        subject: `Job Posting Update: ${job.title}`,
        html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #000;">
                <h1 style="font-size: 32px; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">Job Posting Update</h1>
                <p style="font-size: 16px; line-height: 1.6;">Hello ${user.fullName || user.username},</p>
                <p style="font-size: 16px; line-height: 1.6;">Your job posting was not approved for publication.</p>
                
                <div style="background: #fef2f2; padding: 20px; margin: 20px 0; border-left: 4px solid #dc2626;">
                    <h2 style="margin: 0 0 10px 0; font-size: 24px;">${job.title}</h2>
                    <p style="margin: 5px 0;"><strong>Company:</strong> ${job.company}</p>
                    <p style="margin: 10px 0 0 0;"><strong>Reason:</strong> ${job.rejectionReason}</p>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6;">If you believe this was an error or have questions, please contact the administration team.</p>
                
                <p style="font-size: 14px; color: #6b7280; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    NetGrud College Alumni Platform<br>
                    This is an automated message, please do not reply.
                </p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Rejection email sent to ${user.email}`);
    } catch (error) {
        console.error('Failed to send rejection email:', error);
    }
};

/**
 * Send welcome email to new users
 * @param {Object} user - User object
 */
export const sendWelcomeEmail = async (user) => {
    const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@netgrud.com',
        to: user.email,
        subject: 'Welcome to NetGrud Alumni Platform',
        html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #000;">
                <h1 style="font-size: 32px; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">Welcome to NetGrud</h1>
                <p style="font-size: 16px; line-height: 1.6;">Hello ${user.fullName || user.username},</p>
                <p style="font-size: 16px; line-height: 1.6;">Welcome to the NetGrud College Alumni Platform! Your account has been created successfully.</p>
                
                <div style="background: #f9fafb; padding: 20px; margin: 20px 0; border-left: 4px solid #000;">
                    <h3 style="margin: 0 0 15px 0;">Get Started:</h3>
                    <ul style="padding-left: 20px; margin: 0;">
                        <li style="margin-bottom: 10px;">Complete your profile to connect with fellow alumni</li>
                        <li style="margin-bottom: 10px;">Browse job opportunities</li>
                        <li style="margin-bottom: 10px;">Stay updated with latest news</li>
                        <li style="margin-bottom: 10px;">Explore placement statistics</li>
                    </ul>
                </div>
                
                <a href="${process.env.FRONTEND_URL}/onboarding" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; margin-top: 20px;">
                    Complete Your Profile
                </a>
                
                <p style="font-size: 14px; color: #6b7280; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                    NetGrud College Alumni Platform<br>
                    This is an automated message, please do not reply.
                </p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${user.email}`);
    } catch (error) {
        console.error('Failed to send welcome email:', error);
    }
};
