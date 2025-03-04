import { FC } from "react";
import { HStack, Button, Box } from "@chakra-ui/react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons";
import { usePagination } from "@refinedev/chakra-ui";

import { IconButton } from "@chakra-ui/react";

type PaginationProps = {
    current: number;
    pageCount: number;
    setCurrent: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
    current,
    pageCount,
    setCurrent,
}) => {
    const pagination = usePagination({
        current,
        pageCount,
    });

    return (
        <Box display="flex" justifyContent="flex-end">
            <HStack my="3" spacing="1">
                {pagination?.prev && (
                    <IconButton
                        id="prev-page"
                        aria-label="previous page"
                        onClick={() => setCurrent(current - 1)}
                        disabled={!pagination?.prev}
                        variant="outline"
                    >
                        <IconChevronLeft size="18" />
                    </IconButton>
                )}

                {pagination?.items.map((page, i) => {
                    if (typeof page === "string") {
                        return <span key={i}>...</span>;
                    }

                    return (
                        <Button
                            key={i}
                            onClick={() => setCurrent(page)}
                            variant={page === current ? "solid" : "outline"}
                        >
                            {page}
                        </Button>
                    );
                })}
                {pagination?.next && (
                    <IconButton
                        id="next-page"
                        aria-label="next page"
                        onClick={() => setCurrent(current + 1)}
                        variant="outline"
                    >
                        <IconChevronRight size="18" />
                    </IconButton>
                )}
            </HStack>
        </Box>
    );
};
