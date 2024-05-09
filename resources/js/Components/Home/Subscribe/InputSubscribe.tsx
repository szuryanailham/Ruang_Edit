import { Button } from "@/Components/shadcn/ui/button";
import { Input } from "@/Components/shadcn/ui/input";

export function InputSubscribe() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="bg-white" type="email" placeholder="Email" />
            <Button className="bg-SecondBaseColor" type="submit">
                Subscribe
            </Button>
        </div>
    );
}
