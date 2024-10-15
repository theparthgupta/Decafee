import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-8xl font-bold">Decafee</p>
      <Button
        onClick={() =>
          toast.success("Some cafe", { description: "Booking scheduled for 8pm" })
        }
        className="mt-8"
      >
        Book Now
      </Button>
    </div>
  );
};

export default Home;
