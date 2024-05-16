import { Button } from "@/Components/shadcn/ui/button";
import { Input } from "@/Components/shadcn/ui/input";

export function InputSubscribe() {
    return (
        <div className="flex w-full md:w-[80%] items-center mx-auto space-x-4">
            <Input
                className="bg-white md:py-6"
                type="email"
                placeholder="Email"
            />
            <Button className="bg-BaseColor2 md:py-6" type="submit">
                Subscribe
            </Button>
        </div>
    );
}
