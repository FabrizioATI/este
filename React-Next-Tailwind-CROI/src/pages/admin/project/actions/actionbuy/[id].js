import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '../../../../../services/rest/api';
import useFetch from '../../../../hooks/useFetch'
import BarraLateral from '../../../../../components/admin/barra_lateral';
import NavBar from '../../../../../components/admin/navbar';
import Link from 'next/link'

export default function Edit() {
    const router = useRouter();
    const { id } = router.query;


    const actionsbuy = useFetch(endPoints.actions_buy.actions_buy_list);
    const state = useFetch(endPoints.state_actions.state_actions_list);
    return (
        <>
            <NavBar />
            <div className="flex h-auto flex-wrap  mb-14 mt-8">
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                    {actionsbuy.map((item, i) => {
                        if (item.actionsId == id) {
                            return (
                                <div class="w-full lg:max-w-full lg:flex">
                                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)' }} title="River">
                                    </div>
                                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div class="mb-8">
                                            <div class="text-gray-900 font-bold text-xl mb-2">Cantidad de acciones - {item.nActionsBuy}</div>
                                            <div class="text-gray-900 font-bold text-xl mb-2">Pago total {item.totalPay}</div>
                                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil. <br></br>{item.dateBuy}</p>
                                            <a href={item.voucherFile}>Document</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    );
}



