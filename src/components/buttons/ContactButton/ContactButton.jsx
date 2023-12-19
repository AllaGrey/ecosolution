import { ContactBtn, Text, Ellipse } from './ContactButton.styled';

export const ContactButton = () => {
  const handleScrollToContacts = e => {
    e.preventDefault();
    const contactsSection = document.getElementById('section-contacts');

    if (contactsSection) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const topPosition = contactsSection.offsetTop - headerHeight;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ContactBtn href="#contacts" onClick={e => handleScrollToContacts(e)}>
      <Text>Contact Us</Text>
      <Ellipse></Ellipse>
    </ContactBtn>
  );
};
