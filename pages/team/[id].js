import { useRouter } from 'next/router';
import Member from '@/components/Member';
import { membersdata } from "../../assets/data/dummydata"; // Adjust path as necessary

const MemberPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const member = membersdata.find((member) => member.id === id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return <Member member={member} />;
};

export default MemberPage;
