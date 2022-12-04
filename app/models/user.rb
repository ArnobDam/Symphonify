class User < ApplicationRecord
  has_secure_password

  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "Username cannot be your email." }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  private

  def generate_unique_session_token
    while true
      session_token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
