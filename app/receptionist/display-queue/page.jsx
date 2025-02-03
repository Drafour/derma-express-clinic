"use client";

import $ from "jquery";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getQueue, deleteQueue, createCall } from "../../utils/axios";
import GlobalVariable from "../../globals.js";

export default function Page() {
  const router = useRouter();

  const clinicId = GlobalVariable.clinicId;

  var submit_status = 0;

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      if (localStorage.getItem('counter') == null) {
        console.log('Anda harus memilih counter terlebih dahulu!');
        router.push('/receptionist/select-counter');
      }
      else {
        getListQueue();
      }
    }
  });

  useEffect(() => {
    $('.btn-delete-queue').on('click', function(){
      var id = $(this).attr('data-id');

      deleteQueueCustomer(id);
    });

    // to prevent leak memory unsubscribe from event on unmount
    return () => {
      $('.btn-delete-queue').off('click');
    }
  });

  const getListQueue = () => {
    const token = localStorage.getItem('token');
    const type  = 'Admission';
    const order = 'asc';
    const page  = 1;
    const take  = 50;

    // getQueue(token, type, order, page, take).then(res => {
    //   console.log(res.data.data);

    //   if (res.data.statusCode == 200) {
    //     var data_queue  = res.data.data.data;
    //     var total_queue = data_queue.length;
    //     var div_html    = ``;

    //     if (total_queue > 0) {
    //       for (var i = 0; i < total_queue; i++) {
    //         div_html += `<div class="queue-box flex flex-column text-center" data-id="` + data_queue[i].id + `">
    //                        <h2>` + data_queue[i].number + `</h2>
    //                        <div class="container-button flex justify-content-center">
    //                          <button class="btn btn-secondary-fill btn-call">Call</button>
    //                          <button class="btn btn-secondary-outline btn-delete hidden">Delete</button>
    //                          <button class="btn btn-secondary-fill btn-recall hidden">Recall</button>
    //                          <button class="btn btn-secondary-outline btn-admission hidden">Admission</button>
    //                        </div>
    //                      </div>`;
    //       }

    //       $('.container-queue-box').html(div_html);

    //       $('.btn-call').on('click', function(){
    //         var obj = $(this);

    //         callCustomer(obj);
    //       });

    //       $('.btn-recall').on('click', function(){
    //         var obj = $(this);

    //         callCustomer(obj);
    //       });

    //       $('.btn-delete').on('click', function(){
    //         var obj = $(this);

    //         showModalDelete(obj);
    //       });

    //       $('.btn-admission').on('click', function(){
    //         var obj = $(this);
    //         var id  = obj.parents('.queue-box').attr('data-id');

    //         router.push('/receptionist/admission/search?id=' + id);
    //       });
    //     }
    //     else {
    //       $('.container-queue-box').html('<h3>Belum ada antrian.</h3>');
    //     }
    //   }

    //   $('.container-preloader-page').remove();
    // }).catch(err => {
    //   console.log(err.response.data);
    // });


    $('.container-preloader-page').remove();

    $('.btn-call').on('click', function(){
      var obj = $(this);

      callCustomer(obj);
    });

    $('.btn-recall').on('click', function(){
      var obj = $(this);

      callCustomer(obj);
    });

    $('.btn-delete').on('click', function(){
      var obj = $(this);

      showModalDelete(obj);
    });

    $('.btn-admission').on('click', function(){
      var obj = $(this);
      var id  = obj.parents('.queue-box').attr('data-id');

      router.push('/receptionist/admission/search');
    });
  }

  const callCustomer = (obj) => {
    var parent = obj.parents('.queue-box');

    parent.find('.btn').prop('disabled', true);
    obj.html('<div class="spinner"></div>');
    
    const token   = localStorage.getItem('token');
    const queueId = parent.attr('data-id');
    const target  = 'call';

    // createCall(token, {queueId, number}, target).then(res => {
    //   console.log(res.data.data);

    //   if (parent.find('.btn-call').length > 0) {
    //     obj.remove();
    //     parent.find('.hidden').removeClass('hidden');

    //     if (localStorage.getItem('counter') !== null) {
    //       parent.find('h2').after('<p>Counter ' + localStorage.getItem('counter') + '</p>');
    //     }
    //     else {
    //       console.log('Anda harus memilih counter terlebih dahulu!');
    //     }
    //   }
    //   else {
    //     obj.html('Recall');
    //   }
      
    //   parent.find('.btn').prop('disabled', false);
    // }).catch(err => {
    //   console.log(err.response.data);
    // });


    setTimeout(function(){
      if (parent.find('.btn-call').length > 0) {
        obj.remove();
        parent.find('.hidden').removeClass('hidden');
        parent.find('h2').after('<p>Counter 3</p>');
      }
      else {
        obj.html('Recall');
      }

      parent.find('.btn').prop('disabled', false);
    }, 3000);
  }

  const showModalDelete = (obj) => {
    const id = obj.parents('.queue-box').attr('data-id');

    $('.modal-delete').removeClass('hidden');
    $('.btn-delete-queue').attr('data-id', id);
  }

  const hideModalDelete = () => {
    if (submit_status == 0) {
      $('.modal-delete').addClass('hidden');
      $('.btn-delete-queue').removeAttr('data-id');
    }
  }

  const deleteQueueCustomer = (id) => {
    if (localStorage.getItem('token') === null) {
      router.push('/login');
    }
    else {
      if (submit_status == 0) {
        const token = localStorage.getItem('token');

        $('.container-modal .btn').prop('disabled', true);
        $('.btn-delete-queue').html('<div class="spinner"></div>');

        submit_status = 1;

        // deleteQueue(token, id).then(res => {
        //   console.log(res.data);

        //   submit_status = 0;

        //   $('.container-modal .btn').prop('disabled', false);
        //   $('.btn-delete-queue').html('Ya');

        //   if (res.data.statusCode == 200) {
        //     $('.modal-delete').addClass('hidden');

        //     getListQueue();
        //   }
        // }).catch(err => {
        //   console.log(err.response.data);

        //   submit_status = 0;

        //   $('.container-modal .btn').prop('disabled', false);
        //   $('.btn-delete-queue').html('Ya');
        // });


        setTimeout(function(){
          submit_status = 0;

          $('.container-modal .btn').prop('disabled', false);
          $('.btn-delete-queue').html('Ya');
          $('.modal-delete').addClass('hidden');
        }, 3000);
      }
    }
  }

  return (
    <div>
      <div className="container-body transition">
        <div className="section-display-queue w-90 margin-auto">
          <div className="container-queue-box flex justify-content-center">
            <div className="queue-box flex flex-column text-center">
              <h2>A0001</h2>
              <p>Counter 1</p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0002</h2>
              <p>Counter 2</p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0003</h2>
              <p></p>
              <div className="flex justify-content-center">
                <button className="btn btn-secondary-fill btn-call">Call</button>
                <button className="btn btn-secondary-outline btn-delete hidden">Delete</button>
                <button className="btn btn-secondary-fill btn-recall btn-recall hidden">Recall</button>
                <button className="btn btn-secondary-outline btn-admission hidden">Admission</button>
              </div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0004</h2>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0005</h2>
              <p></p>
              <div className="flex justify-content-center"></div>
            </div>
            <div className="queue-box flex flex-column text-center">
              <h2>A0006</h2>
              <p></p>
              <div className="flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-modal modal-delete hidden">
        <div className="modal-masking" onClick={() => hideModalDelete()}></div>
        <div className="modal-wrapper">
          <div className="modal-content text-center">
            <h4 className="m-bottom-20">Apakah Anda yakin ingin menghapus antrian ini?</h4>
            <div className="container-button flex justify-center">
              <button className="btn btn-primary-outline" onClick={() => hideModalDelete()}>Tidak</button>
              <button className="btn btn-primary btn-delete-queue">Ya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}