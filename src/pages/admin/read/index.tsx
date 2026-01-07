import { useEffect, useState } from "react";

import { Box, Button, Card, Flex, Link, Select, Spinner, Table, Text, TextField } from "@radix-ui/themes";

import { Spacer } from "../../../components/spacer";
import { SERVICE_STATE } from "../../../constants/service";
import { useShopData } from "../../../hooks/useShopData";
import { ServiceStateType } from "../../../types/service.type";
import { AdminReadWrapper } from "./AdminReadStyle.css";
import { useNavigate } from "react-router-dom";
import { StoreData } from "../../../types/data.type";
import SEARCH_ICON from "../../../assets/icon/search.svg";

export const AdminReadPage = () => {
  const navigate = useNavigate();
  const [serviceState, setServiceState] = useState<ServiceStateType>(
    SERVICE_STATE.OFFLINE,
  );
  const [shopList, setShopList] = useState<StoreData[]>([]);

  const {
    data: storeData,
    isLoading,
  } = useShopData(serviceState); // category 없이 전체 데이터 가져오기
  
  useEffect(() => {
    setShopList(storeData || []);
  }, [storeData]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const filteredShopList = storeData?.filter((data) => data.name.includes(value));
    setShopList(filteredShopList || []);
  };

  return (
    <div className={AdminReadWrapper}>
      <Text size="6" weight="bold" mb="4">
        관리자 페이지
      </Text>
      <Spacer height={20} />
      <Flex gap="3" justify="between" align="center" mb="5">
        <Flex align="center" gap="3">
        <Select.Root
          size="3"
          value={serviceState}
          onValueChange={(value) => setServiceState(value as ServiceStateType)}
         
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Item value={SERVICE_STATE.OFFLINE}>오프라인</Select.Item>
            <Select.Item value={SERVICE_STATE.ONLINE}>온라인</Select.Item>
          </Select.Content>
        </Select.Root>
        <Box width="300px">
          <TextField.Root placeholder="식당 이름을 검색하세요." size="3"  onChange={handleSearch}>
            <TextField.Slot>
              <img src={SEARCH_ICON} />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        </Flex>
        <Button size="3" onClick={() => navigate("/stella/admin/write")}>등록하기</Button>
      </Flex>
      <Spacer height={20} />
      {isLoading ? (
        <Flex justify="center" align="center" py="9">
          <Spinner size="3" />
        </Flex>
      ) : (
        <Box style={{ overflowX: "auto" }}>
          <Card>
            <Table.Root variant='surface'>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>상호명</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>카테고리</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>설명</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>주소</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>전화번호</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>트위터 링크</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>지도/사이트 링크</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>인증 여부</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {shopList && shopList.length > 0 ? (
                  shopList.map((data) => (
                    <Table.Row key={data.id || data.name}>
                      <Table.Cell>
                        <Text size="2" wrap='nowrap'>{data.id || "-"}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{data.name}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2" wrap='nowrap'>{data.category}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2" style={{ maxWidth: "300px", wordBreak: "break-word" }}>
                          {data.description || "-"}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2" style={{ maxWidth: "150px", wordBreak: "break-word" }}>
                          {data.address || "-"}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{data.phone || "-"}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        {data.twitterLink ? (
                          <Link
                            href={data.twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="2"
                          >
                            {data.twitterLink.length > 30
                              ? `${data.twitterLink.substring(0, 30)}...`
                              : data.twitterLink}
                          </Link>
                        ) : (
                          <Text size="2">-</Text>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        {data.mapLink ? (
                          <Link
                            href={data.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="2"
                          >
                            {data.mapLink.length > 30
                              ? `${data.mapLink.substring(0, 30)}...`
                              : data.mapLink}
                          </Link>
                        ) : (
                          <Text size="2">-</Text>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2">{data.isVerified ? "✓" : "-"}</Text>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={9}>
                      <Text size="2" align="center">
                        데이터가 없습니다.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Root>
          </Card>
        </Box>
      )}
      <Spacer height={20} />
      <Text size="2" color="gray">
        총 {storeData?.length || 0}개의 데이터가 있습니다.
      </Text>
    </div>
  );
};

