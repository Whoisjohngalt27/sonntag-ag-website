import { BackgroundPaths } from "@/components/ui/background-paths"

export function DemoBackgroundPaths() {
    return (
        <div className="relative min-h-screen w-full">
            <BackgroundPaths />
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-black">
                        Background Paths
                    </h1>
                    <p className="text-xl text-gray-600">
                        Animated floating paths for background use
                    </p>
                </div>
            </div>
        </div>
    )
}
